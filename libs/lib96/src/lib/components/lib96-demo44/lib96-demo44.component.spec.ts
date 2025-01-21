import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib96Demo44Component } from './lib96-demo44.component';

describe('Lib96Demo44Component', () => {
  let component: Lib96Demo44Component;
  let fixture: ComponentFixture<Lib96Demo44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib96Demo44Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib96Demo44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
