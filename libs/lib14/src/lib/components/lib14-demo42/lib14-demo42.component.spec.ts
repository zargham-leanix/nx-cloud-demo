import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib14Demo42Component } from './lib14-demo42.component';

describe('Lib14Demo42Component', () => {
  let component: Lib14Demo42Component;
  let fixture: ComponentFixture<Lib14Demo42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib14Demo42Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib14Demo42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
