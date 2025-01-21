import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib74Demo9Component } from './lib74-demo9.component';

describe('Lib74Demo9Component', () => {
  let component: Lib74Demo9Component;
  let fixture: ComponentFixture<Lib74Demo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib74Demo9Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib74Demo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
