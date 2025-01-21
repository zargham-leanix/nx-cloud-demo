import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib55Demo34Component } from './lib55-demo34.component';

describe('Lib55Demo34Component', () => {
  let component: Lib55Demo34Component;
  let fixture: ComponentFixture<Lib55Demo34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib55Demo34Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib55Demo34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
