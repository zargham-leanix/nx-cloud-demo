import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib96Demo23Component } from './lib96-demo23.component';

describe('Lib96Demo23Component', () => {
  let component: Lib96Demo23Component;
  let fixture: ComponentFixture<Lib96Demo23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib96Demo23Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib96Demo23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
