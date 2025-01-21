import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib91Demo42Component } from './lib91-demo42.component';

describe('Lib91Demo42Component', () => {
  let component: Lib91Demo42Component;
  let fixture: ComponentFixture<Lib91Demo42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib91Demo42Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib91Demo42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
