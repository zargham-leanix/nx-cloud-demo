import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib75Demo35Component } from './lib75-demo35.component';

describe('Lib75Demo35Component', () => {
  let component: Lib75Demo35Component;
  let fixture: ComponentFixture<Lib75Demo35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib75Demo35Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib75Demo35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
