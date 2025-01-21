import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib83Demo10Component } from './lib83-demo10.component';

describe('Lib83Demo10Component', () => {
  let component: Lib83Demo10Component;
  let fixture: ComponentFixture<Lib83Demo10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib83Demo10Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib83Demo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
