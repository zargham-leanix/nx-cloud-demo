import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib14Demo35Component } from './lib14-demo35.component';

describe('Lib14Demo35Component', () => {
  let component: Lib14Demo35Component;
  let fixture: ComponentFixture<Lib14Demo35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib14Demo35Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib14Demo35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
