import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib3Demo15Component } from './lib3-demo15.component';

describe('Lib3Demo15Component', () => {
  let component: Lib3Demo15Component;
  let fixture: ComponentFixture<Lib3Demo15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib3Demo15Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib3Demo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
