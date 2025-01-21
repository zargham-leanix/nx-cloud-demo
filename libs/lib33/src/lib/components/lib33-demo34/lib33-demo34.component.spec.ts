import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib33Demo34Component } from './lib33-demo34.component';

describe('Lib33Demo34Component', () => {
  let component: Lib33Demo34Component;
  let fixture: ComponentFixture<Lib33Demo34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib33Demo34Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib33Demo34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
