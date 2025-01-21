import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib62Demo19Component } from './lib62-demo19.component';

describe('Lib62Demo19Component', () => {
  let component: Lib62Demo19Component;
  let fixture: ComponentFixture<Lib62Demo19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib62Demo19Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib62Demo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
