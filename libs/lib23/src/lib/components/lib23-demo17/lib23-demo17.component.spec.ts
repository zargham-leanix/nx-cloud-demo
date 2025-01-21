import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib23Demo17Component } from './lib23-demo17.component';

describe('Lib23Demo17Component', () => {
  let component: Lib23Demo17Component;
  let fixture: ComponentFixture<Lib23Demo17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib23Demo17Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib23Demo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
