import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib95Demo9Component } from './lib95-demo9.component';

describe('Lib95Demo9Component', () => {
  let component: Lib95Demo9Component;
  let fixture: ComponentFixture<Lib95Demo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib95Demo9Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib95Demo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
