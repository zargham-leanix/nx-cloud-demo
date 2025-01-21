import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib1Demo43Component } from './lib1-demo43.component';

describe('Lib1Demo43Component', () => {
  let component: Lib1Demo43Component;
  let fixture: ComponentFixture<Lib1Demo43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib1Demo43Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib1Demo43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
