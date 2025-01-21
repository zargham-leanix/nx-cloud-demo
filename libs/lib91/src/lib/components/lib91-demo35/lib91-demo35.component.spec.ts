import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib91Demo35Component } from './lib91-demo35.component';

describe('Lib91Demo35Component', () => {
  let component: Lib91Demo35Component;
  let fixture: ComponentFixture<Lib91Demo35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib91Demo35Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib91Demo35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
