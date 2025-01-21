import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib59Demo37Component } from './lib59-demo37.component';

describe('Lib59Demo37Component', () => {
  let component: Lib59Demo37Component;
  let fixture: ComponentFixture<Lib59Demo37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib59Demo37Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib59Demo37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
