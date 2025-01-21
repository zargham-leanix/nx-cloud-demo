import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib46Demo35Component } from './lib46-demo35.component';

describe('Lib46Demo35Component', () => {
  let component: Lib46Demo35Component;
  let fixture: ComponentFixture<Lib46Demo35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib46Demo35Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib46Demo35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
