import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib94Demo42Component } from './lib94-demo42.component';

describe('Lib94Demo42Component', () => {
  let component: Lib94Demo42Component;
  let fixture: ComponentFixture<Lib94Demo42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib94Demo42Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib94Demo42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
