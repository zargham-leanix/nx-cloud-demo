import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib27Demo42Component } from './lib27-demo42.component';

describe('Lib27Demo42Component', () => {
  let component: Lib27Demo42Component;
  let fixture: ComponentFixture<Lib27Demo42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib27Demo42Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib27Demo42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
