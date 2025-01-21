import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib50Demo16Component } from './lib50-demo16.component';

describe('Lib50Demo16Component', () => {
  let component: Lib50Demo16Component;
  let fixture: ComponentFixture<Lib50Demo16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib50Demo16Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib50Demo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
