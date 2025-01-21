import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib61Demo35Component } from './lib61-demo35.component';

describe('Lib61Demo35Component', () => {
  let component: Lib61Demo35Component;
  let fixture: ComponentFixture<Lib61Demo35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib61Demo35Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib61Demo35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
