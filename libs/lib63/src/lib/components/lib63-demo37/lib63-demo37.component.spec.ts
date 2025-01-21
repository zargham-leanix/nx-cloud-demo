import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib63Demo37Component } from './lib63-demo37.component';

describe('Lib63Demo37Component', () => {
  let component: Lib63Demo37Component;
  let fixture: ComponentFixture<Lib63Demo37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib63Demo37Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib63Demo37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
