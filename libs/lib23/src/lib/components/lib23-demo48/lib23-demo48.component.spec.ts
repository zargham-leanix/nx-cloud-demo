import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib23Demo48Component } from './lib23-demo48.component';

describe('Lib23Demo48Component', () => {
  let component: Lib23Demo48Component;
  let fixture: ComponentFixture<Lib23Demo48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib23Demo48Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib23Demo48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
