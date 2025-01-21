import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib25Demo37Component } from './lib25-demo37.component';

describe('Lib25Demo37Component', () => {
  let component: Lib25Demo37Component;
  let fixture: ComponentFixture<Lib25Demo37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib25Demo37Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib25Demo37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
