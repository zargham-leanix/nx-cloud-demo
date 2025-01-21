import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib83Demo15Component } from './lib83-demo15.component';

describe('Lib83Demo15Component', () => {
  let component: Lib83Demo15Component;
  let fixture: ComponentFixture<Lib83Demo15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib83Demo15Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib83Demo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
