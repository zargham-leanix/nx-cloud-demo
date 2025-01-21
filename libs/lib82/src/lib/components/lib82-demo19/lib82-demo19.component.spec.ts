import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib82Demo19Component } from './lib82-demo19.component';

describe('Lib82Demo19Component', () => {
  let component: Lib82Demo19Component;
  let fixture: ComponentFixture<Lib82Demo19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib82Demo19Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib82Demo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
