import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib40Demo42Component } from './lib40-demo42.component';

describe('Lib40Demo42Component', () => {
  let component: Lib40Demo42Component;
  let fixture: ComponentFixture<Lib40Demo42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib40Demo42Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib40Demo42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
