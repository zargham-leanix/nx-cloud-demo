import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib38Demo35Component } from './lib38-demo35.component';

describe('Lib38Demo35Component', () => {
  let component: Lib38Demo35Component;
  let fixture: ComponentFixture<Lib38Demo35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib38Demo35Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib38Demo35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
