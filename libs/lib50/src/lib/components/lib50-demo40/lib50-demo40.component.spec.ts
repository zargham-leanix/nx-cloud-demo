import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib50Demo40Component } from './lib50-demo40.component';

describe('Lib50Demo40Component', () => {
  let component: Lib50Demo40Component;
  let fixture: ComponentFixture<Lib50Demo40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib50Demo40Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib50Demo40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
