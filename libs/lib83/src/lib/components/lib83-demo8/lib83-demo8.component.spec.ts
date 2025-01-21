import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib83Demo8Component } from './lib83-demo8.component';

describe('Lib83Demo8Component', () => {
  let component: Lib83Demo8Component;
  let fixture: ComponentFixture<Lib83Demo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib83Demo8Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib83Demo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
