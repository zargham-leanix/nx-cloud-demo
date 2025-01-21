import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib25Demo42Component } from './lib25-demo42.component';

describe('Lib25Demo42Component', () => {
  let component: Lib25Demo42Component;
  let fixture: ComponentFixture<Lib25Demo42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib25Demo42Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib25Demo42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
