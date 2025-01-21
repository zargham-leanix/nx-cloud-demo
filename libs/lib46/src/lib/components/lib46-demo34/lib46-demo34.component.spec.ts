import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib46Demo34Component } from './lib46-demo34.component';

describe('Lib46Demo34Component', () => {
  let component: Lib46Demo34Component;
  let fixture: ComponentFixture<Lib46Demo34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib46Demo34Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib46Demo34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
