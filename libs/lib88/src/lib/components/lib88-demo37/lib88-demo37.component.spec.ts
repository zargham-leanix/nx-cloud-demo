import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib88Demo37Component } from './lib88-demo37.component';

describe('Lib88Demo37Component', () => {
  let component: Lib88Demo37Component;
  let fixture: ComponentFixture<Lib88Demo37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib88Demo37Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib88Demo37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
