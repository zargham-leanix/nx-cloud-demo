import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib93Demo9Component } from './lib93-demo9.component';

describe('Lib93Demo9Component', () => {
  let component: Lib93Demo9Component;
  let fixture: ComponentFixture<Lib93Demo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib93Demo9Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib93Demo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
