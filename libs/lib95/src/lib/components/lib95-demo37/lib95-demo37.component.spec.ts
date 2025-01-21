import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib95Demo37Component } from './lib95-demo37.component';

describe('Lib95Demo37Component', () => {
  let component: Lib95Demo37Component;
  let fixture: ComponentFixture<Lib95Demo37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib95Demo37Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib95Demo37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
