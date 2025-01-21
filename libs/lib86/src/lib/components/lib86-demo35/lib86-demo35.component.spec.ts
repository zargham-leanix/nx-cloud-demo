import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib86Demo35Component } from './lib86-demo35.component';

describe('Lib86Demo35Component', () => {
  let component: Lib86Demo35Component;
  let fixture: ComponentFixture<Lib86Demo35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib86Demo35Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib86Demo35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
