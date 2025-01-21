import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib23Demo14Component } from './lib23-demo14.component';

describe('Lib23Demo14Component', () => {
  let component: Lib23Demo14Component;
  let fixture: ComponentFixture<Lib23Demo14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib23Demo14Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib23Demo14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
