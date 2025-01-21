import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib31Demo19Component } from './lib31-demo19.component';

describe('Lib31Demo19Component', () => {
  let component: Lib31Demo19Component;
  let fixture: ComponentFixture<Lib31Demo19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib31Demo19Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib31Demo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
