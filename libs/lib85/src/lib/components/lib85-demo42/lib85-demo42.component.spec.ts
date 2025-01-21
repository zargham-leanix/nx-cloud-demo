import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib85Demo42Component } from './lib85-demo42.component';

describe('Lib85Demo42Component', () => {
  let component: Lib85Demo42Component;
  let fixture: ComponentFixture<Lib85Demo42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib85Demo42Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib85Demo42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
