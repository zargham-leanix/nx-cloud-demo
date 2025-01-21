import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib41Demo35Component } from './lib41-demo35.component';

describe('Lib41Demo35Component', () => {
  let component: Lib41Demo35Component;
  let fixture: ComponentFixture<Lib41Demo35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib41Demo35Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib41Demo35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
