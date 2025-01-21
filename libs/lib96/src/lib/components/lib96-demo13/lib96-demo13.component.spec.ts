import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib96Demo13Component } from './lib96-demo13.component';

describe('Lib96Demo13Component', () => {
  let component: Lib96Demo13Component;
  let fixture: ComponentFixture<Lib96Demo13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib96Demo13Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib96Demo13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
