import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib11Demo9Component } from './lib11-demo9.component';

describe('Lib11Demo9Component', () => {
  let component: Lib11Demo9Component;
  let fixture: ComponentFixture<Lib11Demo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib11Demo9Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib11Demo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
