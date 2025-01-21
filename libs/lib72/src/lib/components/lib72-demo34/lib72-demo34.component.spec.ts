import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib72Demo34Component } from './lib72-demo34.component';

describe('Lib72Demo34Component', () => {
  let component: Lib72Demo34Component;
  let fixture: ComponentFixture<Lib72Demo34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib72Demo34Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib72Demo34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
