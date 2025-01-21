import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib23Demo2Component } from './lib23-demo2.component';

describe('Lib23Demo2Component', () => {
  let component: Lib23Demo2Component;
  let fixture: ComponentFixture<Lib23Demo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib23Demo2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib23Demo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
