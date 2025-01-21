import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib54Demo42Component } from './lib54-demo42.component';

describe('Lib54Demo42Component', () => {
  let component: Lib54Demo42Component;
  let fixture: ComponentFixture<Lib54Demo42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib54Demo42Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib54Demo42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
