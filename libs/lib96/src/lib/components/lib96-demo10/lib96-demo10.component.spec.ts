import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib96Demo10Component } from './lib96-demo10.component';

describe('Lib96Demo10Component', () => {
  let component: Lib96Demo10Component;
  let fixture: ComponentFixture<Lib96Demo10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib96Demo10Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib96Demo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
