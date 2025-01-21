import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib74Demo35Component } from './lib74-demo35.component';

describe('Lib74Demo35Component', () => {
  let component: Lib74Demo35Component;
  let fixture: ComponentFixture<Lib74Demo35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib74Demo35Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib74Demo35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
