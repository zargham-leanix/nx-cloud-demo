import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib95Demo35Component } from './lib95-demo35.component';

describe('Lib95Demo35Component', () => {
  let component: Lib95Demo35Component;
  let fixture: ComponentFixture<Lib95Demo35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib95Demo35Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib95Demo35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
