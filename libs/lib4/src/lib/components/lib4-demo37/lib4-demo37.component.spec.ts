import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib4Demo37Component } from './lib4-demo37.component';

describe('Lib4Demo37Component', () => {
  let component: Lib4Demo37Component;
  let fixture: ComponentFixture<Lib4Demo37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib4Demo37Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib4Demo37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
