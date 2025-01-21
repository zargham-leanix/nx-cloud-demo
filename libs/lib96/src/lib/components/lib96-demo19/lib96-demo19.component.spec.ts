import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib96Demo19Component } from './lib96-demo19.component';

describe('Lib96Demo19Component', () => {
  let component: Lib96Demo19Component;
  let fixture: ComponentFixture<Lib96Demo19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib96Demo19Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib96Demo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
