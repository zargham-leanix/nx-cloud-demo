import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib46Demo8Component } from './lib46-demo8.component';

describe('Lib46Demo8Component', () => {
  let component: Lib46Demo8Component;
  let fixture: ComponentFixture<Lib46Demo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib46Demo8Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib46Demo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
