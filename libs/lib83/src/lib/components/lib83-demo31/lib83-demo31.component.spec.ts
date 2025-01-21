import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib83Demo31Component } from './lib83-demo31.component';

describe('Lib83Demo31Component', () => {
  let component: Lib83Demo31Component;
  let fixture: ComponentFixture<Lib83Demo31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib83Demo31Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib83Demo31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
