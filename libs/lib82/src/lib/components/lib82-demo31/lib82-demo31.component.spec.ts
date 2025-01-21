import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib82Demo31Component } from './lib82-demo31.component';

describe('Lib82Demo31Component', () => {
  let component: Lib82Demo31Component;
  let fixture: ComponentFixture<Lib82Demo31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib82Demo31Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib82Demo31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
