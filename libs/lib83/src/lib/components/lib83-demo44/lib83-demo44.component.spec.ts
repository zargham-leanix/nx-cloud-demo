import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib83Demo44Component } from './lib83-demo44.component';

describe('Lib83Demo44Component', () => {
  let component: Lib83Demo44Component;
  let fixture: ComponentFixture<Lib83Demo44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib83Demo44Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib83Demo44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
