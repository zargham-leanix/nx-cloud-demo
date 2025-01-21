import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib81Demo35Component } from './lib81-demo35.component';

describe('Lib81Demo35Component', () => {
  let component: Lib81Demo35Component;
  let fixture: ComponentFixture<Lib81Demo35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib81Demo35Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib81Demo35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
