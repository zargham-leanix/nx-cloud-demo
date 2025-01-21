import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib24Demo35Component } from './lib24-demo35.component';

describe('Lib24Demo35Component', () => {
  let component: Lib24Demo35Component;
  let fixture: ComponentFixture<Lib24Demo35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib24Demo35Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib24Demo35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
