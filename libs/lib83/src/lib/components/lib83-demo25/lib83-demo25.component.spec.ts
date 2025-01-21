import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib83Demo25Component } from './lib83-demo25.component';

describe('Lib83Demo25Component', () => {
  let component: Lib83Demo25Component;
  let fixture: ComponentFixture<Lib83Demo25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib83Demo25Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib83Demo25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
