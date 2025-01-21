import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib96Demo5Component } from './lib96-demo5.component';

describe('Lib96Demo5Component', () => {
  let component: Lib96Demo5Component;
  let fixture: ComponentFixture<Lib96Demo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib96Demo5Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib96Demo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
