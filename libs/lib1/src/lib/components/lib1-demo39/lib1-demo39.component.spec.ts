import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib1Demo39Component } from './lib1-demo39.component';

describe('Lib1Demo39Component', () => {
  let component: Lib1Demo39Component;
  let fixture: ComponentFixture<Lib1Demo39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib1Demo39Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib1Demo39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
