import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib61Demo37Component } from './lib61-demo37.component';

describe('Lib61Demo37Component', () => {
  let component: Lib61Demo37Component;
  let fixture: ComponentFixture<Lib61Demo37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib61Demo37Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib61Demo37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
