import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib33Demo35Component } from './lib33-demo35.component';

describe('Lib33Demo35Component', () => {
  let component: Lib33Demo35Component;
  let fixture: ComponentFixture<Lib33Demo35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib33Demo35Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib33Demo35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
