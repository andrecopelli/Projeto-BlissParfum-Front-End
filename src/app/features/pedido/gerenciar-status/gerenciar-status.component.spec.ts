import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciarStatusComponent } from './gerenciar-status.component';

describe('GerenciarStatusComponent', () => {
  let component: GerenciarStatusComponent;
  let fixture: ComponentFixture<GerenciarStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GerenciarStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GerenciarStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
