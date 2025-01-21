import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib61Demo9Component } from './lib61-demo9.component';

describe('Lib61Demo9Component', () => {
  let component: Lib61Demo9Component;
  let fixture: ComponentFixture<Lib61Demo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib61Demo9Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib61Demo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
