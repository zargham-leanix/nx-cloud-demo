import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib57Demo19Component } from './lib57-demo19.component';

describe('Lib57Demo19Component', () => {
  let component: Lib57Demo19Component;
  let fixture: ComponentFixture<Lib57Demo19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib57Demo19Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib57Demo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
