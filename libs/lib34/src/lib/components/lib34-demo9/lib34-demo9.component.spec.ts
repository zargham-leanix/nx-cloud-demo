import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib34Demo9Component } from './lib34-demo9.component';

describe('Lib34Demo9Component', () => {
  let component: Lib34Demo9Component;
  let fixture: ComponentFixture<Lib34Demo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib34Demo9Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib34Demo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
