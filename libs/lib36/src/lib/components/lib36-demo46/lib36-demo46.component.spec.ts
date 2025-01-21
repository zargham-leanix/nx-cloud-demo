import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib36Demo46Component } from './lib36-demo46.component';

describe('Lib36Demo46Component', () => {
  let component: Lib36Demo46Component;
  let fixture: ComponentFixture<Lib36Demo46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib36Demo46Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib36Demo46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
