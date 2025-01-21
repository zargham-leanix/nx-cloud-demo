import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib86Demo42Component } from './lib86-demo42.component';

describe('Lib86Demo42Component', () => {
  let component: Lib86Demo42Component;
  let fixture: ComponentFixture<Lib86Demo42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib86Demo42Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib86Demo42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
