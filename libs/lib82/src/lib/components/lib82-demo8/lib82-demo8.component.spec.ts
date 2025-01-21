import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib82Demo8Component } from './lib82-demo8.component';

describe('Lib82Demo8Component', () => {
  let component: Lib82Demo8Component;
  let fixture: ComponentFixture<Lib82Demo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib82Demo8Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib82Demo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
