import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib82Demo46Component } from './lib82-demo46.component';

describe('Lib82Demo46Component', () => {
  let component: Lib82Demo46Component;
  let fixture: ComponentFixture<Lib82Demo46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib82Demo46Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib82Demo46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
