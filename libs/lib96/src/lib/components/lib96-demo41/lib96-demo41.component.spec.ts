import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib96Demo41Component } from './lib96-demo41.component';

describe('Lib96Demo41Component', () => {
  let component: Lib96Demo41Component;
  let fixture: ComponentFixture<Lib96Demo41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib96Demo41Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib96Demo41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
