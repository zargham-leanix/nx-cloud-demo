import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib21Demo35Component } from './lib21-demo35.component';

describe('Lib21Demo35Component', () => {
  let component: Lib21Demo35Component;
  let fixture: ComponentFixture<Lib21Demo35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib21Demo35Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib21Demo35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
