import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib94Demo35Component } from './lib94-demo35.component';

describe('Lib94Demo35Component', () => {
  let component: Lib94Demo35Component;
  let fixture: ComponentFixture<Lib94Demo35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib94Demo35Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib94Demo35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
