import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib33Demo37Component } from './lib33-demo37.component';

describe('Lib33Demo37Component', () => {
  let component: Lib33Demo37Component;
  let fixture: ComponentFixture<Lib33Demo37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib33Demo37Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib33Demo37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
