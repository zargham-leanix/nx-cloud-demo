import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib58Demo29Component } from './lib58-demo29.component';

describe('Lib58Demo29Component', () => {
  let component: Lib58Demo29Component;
  let fixture: ComponentFixture<Lib58Demo29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib58Demo29Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib58Demo29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
