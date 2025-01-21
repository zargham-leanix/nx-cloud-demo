import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib83Demo41Component } from './lib83-demo41.component';

describe('Lib83Demo41Component', () => {
  let component: Lib83Demo41Component;
  let fixture: ComponentFixture<Lib83Demo41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib83Demo41Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib83Demo41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
