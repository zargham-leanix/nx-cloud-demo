import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib8Demo34Component } from './lib8-demo34.component';

describe('Lib8Demo34Component', () => {
  let component: Lib8Demo34Component;
  let fixture: ComponentFixture<Lib8Demo34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib8Demo34Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib8Demo34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
