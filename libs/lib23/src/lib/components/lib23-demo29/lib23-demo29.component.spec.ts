import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib23Demo29Component } from './lib23-demo29.component';

describe('Lib23Demo29Component', () => {
  let component: Lib23Demo29Component;
  let fixture: ComponentFixture<Lib23Demo29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib23Demo29Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib23Demo29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
