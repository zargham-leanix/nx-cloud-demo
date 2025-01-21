import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib96Demo29Component } from './lib96-demo29.component';

describe('Lib96Demo29Component', () => {
  let component: Lib96Demo29Component;
  let fixture: ComponentFixture<Lib96Demo29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib96Demo29Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib96Demo29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
