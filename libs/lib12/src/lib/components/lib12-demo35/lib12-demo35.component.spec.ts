import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib12Demo35Component } from './lib12-demo35.component';

describe('Lib12Demo35Component', () => {
  let component: Lib12Demo35Component;
  let fixture: ComponentFixture<Lib12Demo35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib12Demo35Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib12Demo35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
