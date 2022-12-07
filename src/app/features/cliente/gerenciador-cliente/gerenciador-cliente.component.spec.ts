import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciadorClienteComponent } from './gerenciador-cliente.component';

describe('GerenciadorClienteComponent', () => {
  let component: GerenciadorClienteComponent;
  let fixture: ComponentFixture<GerenciadorClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GerenciadorClienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GerenciadorClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
