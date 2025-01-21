import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib83Demo46Component } from './lib83-demo46.component';

describe('Lib83Demo46Component', () => {
  let component: Lib83Demo46Component;
  let fixture: ComponentFixture<Lib83Demo46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib83Demo46Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib83Demo46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
