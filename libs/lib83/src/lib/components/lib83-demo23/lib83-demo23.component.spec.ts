import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib83Demo23Component } from './lib83-demo23.component';

describe('Lib83Demo23Component', () => {
  let component: Lib83Demo23Component;
  let fixture: ComponentFixture<Lib83Demo23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib83Demo23Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib83Demo23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
