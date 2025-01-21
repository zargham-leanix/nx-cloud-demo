import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib81Demo37Component } from './lib81-demo37.component';

describe('Lib81Demo37Component', () => {
  let component: Lib81Demo37Component;
  let fixture: ComponentFixture<Lib81Demo37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib81Demo37Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib81Demo37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
