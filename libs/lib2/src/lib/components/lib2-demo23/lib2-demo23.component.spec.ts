import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib2Demo23Component } from './lib2-demo23.component';

describe('Lib2Demo23Component', () => {
  let component: Lib2Demo23Component;
  let fixture: ComponentFixture<Lib2Demo23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib2Demo23Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib2Demo23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
