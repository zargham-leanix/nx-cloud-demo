import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib50Demo2Component } from './lib50-demo2.component';

describe('Lib50Demo2Component', () => {
  let component: Lib50Demo2Component;
  let fixture: ComponentFixture<Lib50Demo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib50Demo2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib50Demo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
