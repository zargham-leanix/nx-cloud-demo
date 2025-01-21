import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib46Demo37Component } from './lib46-demo37.component';

describe('Lib46Demo37Component', () => {
  let component: Lib46Demo37Component;
  let fixture: ComponentFixture<Lib46Demo37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib46Demo37Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib46Demo37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
