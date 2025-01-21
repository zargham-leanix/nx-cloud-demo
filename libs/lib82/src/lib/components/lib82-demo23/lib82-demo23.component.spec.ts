import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib82Demo23Component } from './lib82-demo23.component';

describe('Lib82Demo23Component', () => {
  let component: Lib82Demo23Component;
  let fixture: ComponentFixture<Lib82Demo23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib82Demo23Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib82Demo23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
