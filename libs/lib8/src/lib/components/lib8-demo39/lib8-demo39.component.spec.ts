import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib8Demo39Component } from './lib8-demo39.component';

describe('Lib8Demo39Component', () => {
  let component: Lib8Demo39Component;
  let fixture: ComponentFixture<Lib8Demo39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib8Demo39Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib8Demo39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
