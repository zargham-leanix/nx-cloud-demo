import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib41Demo29Component } from './lib41-demo29.component';

describe('Lib41Demo29Component', () => {
  let component: Lib41Demo29Component;
  let fixture: ComponentFixture<Lib41Demo29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib41Demo29Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib41Demo29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
