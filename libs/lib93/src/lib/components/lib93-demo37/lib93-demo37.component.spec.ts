import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib93Demo37Component } from './lib93-demo37.component';

describe('Lib93Demo37Component', () => {
  let component: Lib93Demo37Component;
  let fixture: ComponentFixture<Lib93Demo37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib93Demo37Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib93Demo37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
