import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib40Demo37Component } from './lib40-demo37.component';

describe('Lib40Demo37Component', () => {
  let component: Lib40Demo37Component;
  let fixture: ComponentFixture<Lib40Demo37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib40Demo37Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib40Demo37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
