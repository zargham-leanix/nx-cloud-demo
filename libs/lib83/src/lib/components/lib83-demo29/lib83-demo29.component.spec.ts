import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib83Demo29Component } from './lib83-demo29.component';

describe('Lib83Demo29Component', () => {
  let component: Lib83Demo29Component;
  let fixture: ComponentFixture<Lib83Demo29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib83Demo29Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib83Demo29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
