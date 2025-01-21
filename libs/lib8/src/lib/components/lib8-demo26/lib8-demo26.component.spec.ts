import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib8Demo26Component } from './lib8-demo26.component';

describe('Lib8Demo26Component', () => {
  let component: Lib8Demo26Component;
  let fixture: ComponentFixture<Lib8Demo26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib8Demo26Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib8Demo26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
