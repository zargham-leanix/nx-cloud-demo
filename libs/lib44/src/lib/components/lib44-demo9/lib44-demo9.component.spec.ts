import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib44Demo9Component } from './lib44-demo9.component';

describe('Lib44Demo9Component', () => {
  let component: Lib44Demo9Component;
  let fixture: ComponentFixture<Lib44Demo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib44Demo9Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib44Demo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
