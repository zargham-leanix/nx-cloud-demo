import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib100Demo41Component } from './lib100-demo41.component';

describe('Lib100Demo41Component', () => {
  let component: Lib100Demo41Component;
  let fixture: ComponentFixture<Lib100Demo41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib100Demo41Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib100Demo41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
