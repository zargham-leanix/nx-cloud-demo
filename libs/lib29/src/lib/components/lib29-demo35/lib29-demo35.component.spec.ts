import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib29Demo35Component } from './lib29-demo35.component';

describe('Lib29Demo35Component', () => {
  let component: Lib29Demo35Component;
  let fixture: ComponentFixture<Lib29Demo35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib29Demo35Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib29Demo35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
