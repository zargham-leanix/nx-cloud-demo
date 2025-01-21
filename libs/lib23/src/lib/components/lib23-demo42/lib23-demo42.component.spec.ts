import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib23Demo42Component } from './lib23-demo42.component';

describe('Lib23Demo42Component', () => {
  let component: Lib23Demo42Component;
  let fixture: ComponentFixture<Lib23Demo42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib23Demo42Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib23Demo42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
