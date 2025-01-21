import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib3Demo12Component } from './lib3-demo12.component';

describe('Lib3Demo12Component', () => {
  let component: Lib3Demo12Component;
  let fixture: ComponentFixture<Lib3Demo12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib3Demo12Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib3Demo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
