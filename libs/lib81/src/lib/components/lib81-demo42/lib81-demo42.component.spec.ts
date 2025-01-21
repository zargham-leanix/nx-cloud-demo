import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib81Demo42Component } from './lib81-demo42.component';

describe('Lib81Demo42Component', () => {
  let component: Lib81Demo42Component;
  let fixture: ComponentFixture<Lib81Demo42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib81Demo42Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib81Demo42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
