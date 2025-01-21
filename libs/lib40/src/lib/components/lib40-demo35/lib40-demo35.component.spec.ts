import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib40Demo35Component } from './lib40-demo35.component';

describe('Lib40Demo35Component', () => {
  let component: Lib40Demo35Component;
  let fixture: ComponentFixture<Lib40Demo35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib40Demo35Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib40Demo35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
