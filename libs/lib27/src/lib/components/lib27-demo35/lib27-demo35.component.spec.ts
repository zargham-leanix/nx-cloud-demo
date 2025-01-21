import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib27Demo35Component } from './lib27-demo35.component';

describe('Lib27Demo35Component', () => {
  let component: Lib27Demo35Component;
  let fixture: ComponentFixture<Lib27Demo35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib27Demo35Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib27Demo35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
