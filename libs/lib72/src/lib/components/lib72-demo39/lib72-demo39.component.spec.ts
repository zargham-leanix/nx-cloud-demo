import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib72Demo39Component } from './lib72-demo39.component';

describe('Lib72Demo39Component', () => {
  let component: Lib72Demo39Component;
  let fixture: ComponentFixture<Lib72Demo39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib72Demo39Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib72Demo39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
