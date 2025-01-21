import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib23Demo34Component } from './lib23-demo34.component';

describe('Lib23Demo34Component', () => {
  let component: Lib23Demo34Component;
  let fixture: ComponentFixture<Lib23Demo34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib23Demo34Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib23Demo34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
