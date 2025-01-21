import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib93Demo34Component } from './lib93-demo34.component';

describe('Lib93Demo34Component', () => {
  let component: Lib93Demo34Component;
  let fixture: ComponentFixture<Lib93Demo34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib93Demo34Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib93Demo34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
