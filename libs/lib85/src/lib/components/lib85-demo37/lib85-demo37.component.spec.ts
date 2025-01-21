import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib85Demo37Component } from './lib85-demo37.component';

describe('Lib85Demo37Component', () => {
  let component: Lib85Demo37Component;
  let fixture: ComponentFixture<Lib85Demo37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib85Demo37Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib85Demo37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
