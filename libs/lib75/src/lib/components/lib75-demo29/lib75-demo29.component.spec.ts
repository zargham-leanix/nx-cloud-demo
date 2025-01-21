import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib75Demo29Component } from './lib75-demo29.component';

describe('Lib75Demo29Component', () => {
  let component: Lib75Demo29Component;
  let fixture: ComponentFixture<Lib75Demo29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib75Demo29Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib75Demo29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
