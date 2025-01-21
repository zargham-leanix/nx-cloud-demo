import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib64Demo42Component } from './lib64-demo42.component';

describe('Lib64Demo42Component', () => {
  let component: Lib64Demo42Component;
  let fixture: ComponentFixture<Lib64Demo42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib64Demo42Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib64Demo42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
