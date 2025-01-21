import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib30Demo37Component } from './lib30-demo37.component';

describe('Lib30Demo37Component', () => {
  let component: Lib30Demo37Component;
  let fixture: ComponentFixture<Lib30Demo37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib30Demo37Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib30Demo37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
