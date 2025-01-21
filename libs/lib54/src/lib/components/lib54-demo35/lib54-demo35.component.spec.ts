import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib54Demo35Component } from './lib54-demo35.component';

describe('Lib54Demo35Component', () => {
  let component: Lib54Demo35Component;
  let fixture: ComponentFixture<Lib54Demo35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib54Demo35Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib54Demo35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
