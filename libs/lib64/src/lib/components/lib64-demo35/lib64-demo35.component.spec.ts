import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib64Demo35Component } from './lib64-demo35.component';

describe('Lib64Demo35Component', () => {
  let component: Lib64Demo35Component;
  let fixture: ComponentFixture<Lib64Demo35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib64Demo35Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib64Demo35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
