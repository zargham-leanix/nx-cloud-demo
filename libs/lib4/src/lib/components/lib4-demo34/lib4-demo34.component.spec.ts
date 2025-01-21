import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib4Demo34Component } from './lib4-demo34.component';

describe('Lib4Demo34Component', () => {
  let component: Lib4Demo34Component;
  let fixture: ComponentFixture<Lib4Demo34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib4Demo34Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib4Demo34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
