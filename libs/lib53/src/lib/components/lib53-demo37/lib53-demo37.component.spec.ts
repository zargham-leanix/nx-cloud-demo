import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib53Demo37Component } from './lib53-demo37.component';

describe('Lib53Demo37Component', () => {
  let component: Lib53Demo37Component;
  let fixture: ComponentFixture<Lib53Demo37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib53Demo37Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib53Demo37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
